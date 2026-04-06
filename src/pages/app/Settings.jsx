import { useTranslation } from "react-i18next";
import PageContainer from "../../components/PageContainer";

const Settings = () => {

  const { t } = useTranslation();

  return (

    <PageContainer>

      <h1 className="text-3xl font-bold">

        {t("settings.title")}

      </h1>

      <p className="mt-4 text-gray-400">

        {t("settings.comingSoon")}

      </p>

    </PageContainer>

  );
};

export default Settings;
