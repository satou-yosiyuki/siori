import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import styles from "./style.module.scss";
import Modal from "../Modal";

interface FormData {
  title: string;
  departureDate: string;
  returnDate: string;
}

const PlanContent = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.column}>沖縄</div>
        <div className={styles.column}>北海道</div>
        <div className={styles.column}>韓国</div>
        <div className={styles.column}>福岡</div>
      </div>
      <div className={styles.bookmark} onClick={() => setIsOpen(true)}>
        <span className={styles.bookmarkIcon}>+</span>
        <span className={styles.bookmarkText}></span>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.travelForm}>
          <div className={styles.formGroup}>
            <label htmlFor="title">タイトル</label>
            <Controller
              name="title"
              control={control}
              rules={{ required: "タイトルは必須です" }}
              render={({ field }) => (
                <input {...field} type="text" id="title" />
              )}
            />
            {errors.title && <p>{errors.title.message}</p>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="departureDate">出発日</label>
            <Controller
              name="departureDate"
              control={control}
              rules={{ required: "出発日は必須です" }}
              render={({ field }) => (
                <input {...field} type="date" id="departureDate" />
              )}
            />
            {errors.departureDate && <p>{errors.departureDate.message}</p>}
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="returnDate">帰宅日</label>
            <Controller
              name="returnDate"
              control={control}
              rules={{ required: "帰宅日は必須です" }}
              render={({ field }) => (
                <input {...field} type="date" id="returnDate" />
              )}
            />
            {errors.returnDate && <p>{errors.returnDate.message}</p>}
          </div>
          <div className={styles.buttons}>
            <button
              className={styles.closeButton}
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
            <button type="submit" className={styles.createButton}>
              作成
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default PlanContent;
