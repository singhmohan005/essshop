import React, { useState } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);

  // Handle Menu Open/Close
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  // Change Language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    handleClose();
  };

  return (
    <>
      {/* 🌍 Language Icon Button */}
      <IconButton color="inherit" onClick={handleClick}>
        <LanguageIcon />
      </IconButton>

      {/* Dropdown Menu */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={() => changeLanguage("en")}>English</MenuItem>
        <MenuItem onClick={() => changeLanguage("es")}>Español</MenuItem>
        <MenuItem onClick={() => changeLanguage("fr")}>Français</MenuItem>
        <MenuItem onClick={() => changeLanguage("de")}>Deutsch</MenuItem>
      </Menu>
    </>
  );
};

export default LanguageSelector;
