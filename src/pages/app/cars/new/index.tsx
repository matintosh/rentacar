import { Button } from "@components/button";
import { Card } from "@components/card";
import { Input } from "@components/input";
import { Layout } from "@components/layout";
import styles from "./new-car.module.scss";
import Carousel from "framer-motion-carousel";

import {
  faCopyright,
  faCar,
  faCalendar,
  faMoneyCheck,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { CarItem } from "@components/car-item";
import Image from "next/image";
import { AppConfig } from "utils/AppConfig";
import { useCallback, useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import { UPLOAD } from "graphql/mutations/upload";
import { uploadFiles } from "lib/upload-files";
import { CREATE_CAR } from "graphql/mutations/create-car";

interface Form {
  brand?: string;
  model?: string;
  year?: number;
  price?: number;
  plate?: string;
  description?: string;
  images?: any[];
}

export default function App({}: {}) {
  const uploadRef = useRef(null);
  const [form, setForm] = useState<Form>({});
  const [upload] = useMutation(UPLOAD);
  const [submit] = useMutation(CREATE_CAR);

  const updateForm = useCallback(
    (e: any) => {
      const value =
        e.target.type === "number" ? parseInt(e.target.value) : e.target.value;
      setForm({ ...form, [e.target.name]: value });
    },
    [setForm, form]
  );

  const updateImage = async (event: any) => {
    const img = event.target.files[0];

    setForm({ ...form, images: form.images ? [...form.images, img] : [img] });
  };

  const uploadImages = useCallback(async () => {
    const files = await uploadFiles(form.images, (file) =>
      upload({ variables: { file } })
    );

    const ids = files.map((file: any) => file.data.upload.id);
    updateForm({ target: { name: "pictures", value: ids } });
    return ids;
  }, [form, updateForm, upload]);

  const handleSubmit = useCallback(async () => {
    const pictures = await uploadImages();

    const { images, ...body } = form;
    const res = await submit({
      variables: {
        input: {
          data: {
            ...body,
            pictures,
          },
        },
      },
    });

    console.log({ res });
  }, [form, uploadImages, submit]);

  return (
    <Layout>
      <Card className={styles["header"]}>
        <h2>Nuevo vehiculo</h2>
        <Button onClick={handleSubmit}>Guardar</Button>
      </Card>

      <div className={styles["create-car-container"]}>
        <Card className={styles["general-info"]}>
          <h3>Informacion general</h3>

          <div className={styles["general-info-form"]}>
            <Input
              placeholder='Marca'
              name='brand'
              icon={faCopyright}
              onChange={updateForm}
            />
            <Input
              placeholder='Modelo'
              icon={faCar}
              onChange={updateForm}
              name='model'
            />

            <Input
              name='plate'
              placeholder='Matricula'
              icon={faMoneyCheck}
              onChange={updateForm}
            />
            <Input
              name='price'
              placeholder='Precio'
              icon={faDollarSign}
              onChange={updateForm}
              type='number'
            />
            <Input
              name='year'
              placeholder='Año'
              icon={faCalendar}
              onChange={updateForm}
              type='number'
            />
          </div>
        </Card>
        <Card className={styles["general-info"]}>
          <h3>Images</h3>

          <div className={styles["images-container"]}>
            <Carousel
              renderDots={() => null}
              autoPlay={false}
              interval={1000}
              loop={true}
            >
              {form.images &&
                form.images.map((item, i) => (
                  <div key={i} className={styles["car-image-container"]}>
                    <Image
                      src={URL.createObjectURL(item)}
                      alt={"image preview"}
                      className={styles["car-image"]}
                      objectFit={"contain"}
                      height={300}
                      width={300}
                    />
                  </div>
                ))}
            </Carousel>
          </div>
          <input
            ref={uploadRef}
            type='file'
            name='files'
            onChange={updateImage}
            alt='image'
            className={styles["input-file"]}
          />
          <Button
            className={styles["upload-button"]}
            onClick={() => uploadRef?.current?.click()}
          >
            {form?.images?.length ? "Add" : "Upload a picture"}
          </Button>
        </Card>
        <div className={styles["car-preview"]}>
          <CarItem
            brand={form?.brand ?? ""}
            model={form?.model ?? ""}
            price={form?.price ?? 0}
            plate={form?.plate ?? ""}
            pictures={
              []
            }
            year={form?.year ?? 0}
            booking={null}
          />
        </div>
      </div>
    </Layout>
  );
}
