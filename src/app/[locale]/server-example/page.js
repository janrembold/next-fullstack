import { getTranslations } from "next-intl/server";

export default async function Page() {
  const t = await getTranslations("Index");
  const dateString = new Date().toLocaleString();

  return (
    <div>
      <h1>Server Example</h1>
      <h2>{t("title")}</h2>
      <p>async i18n usage - server components</p>
      <p>{dateString}</p>
    </div>
  );
}
