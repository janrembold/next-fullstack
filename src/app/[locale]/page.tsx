import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Index");
  return (
    <>
      <h1>{t("title")}</h1>
      <p>non-async i18n usage</p>
    </>
  );
}
