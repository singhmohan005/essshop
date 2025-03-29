import { Link } from "react-router-dom";
import LanguageSelector from "../../components/LanguageSelector";
// import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation();
    return (
        <div>
            <h1>{t("welcome")}</h1>
            <h3 className="text-red-500">HOME</h3>
            <Link to="/about">
                <button>Go to about</button>
            </Link>
            <div style={{ marginLeft: "auto" }}>
          </div>
        </div>
    )
}

export default Home;