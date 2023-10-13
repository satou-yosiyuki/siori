/**
 * プラン一覧画面
 */
import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import styles from "./style.module.scss";
import Modal from "../Modal";

/**
 * プラン作成時のモーダルに渡すprops
 */
interface FormData {
  title: string;
  departureDate: string;
  returnDate: string;
}

/**
 * プラン一覧画面
 */
const PlanContent = () => {
  const [isOpen, setIsOpen] = React.useState(false); // モーダルの開閉
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
      {/* FIX: データ取得して表示する */}
      <div className={styles.planListContainer}>
        <div className={styles.column}>沖縄</div>
        <div className={styles.column}>北海道</div>
        <div className={styles.column}>韓国</div>
        <div className={styles.column}>福岡</div>
      </div>

      {/* しおりを作成するアイコン */}
      <div className={styles.createPlanIcon} onClick={() => setIsOpen(true)}>
        <span className={styles.addIcon}>+</span>
      </div>

      {/* プラン作成モーダル */}
      <Modal isOpen={isOpen}>
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
