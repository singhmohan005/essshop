import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import LanguageSelector from "../LanguageSelector";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";
import "@testing-library/jest-dom";

// Utility function to wrap the component with I18n provider
const renderWithI18n = (component) => {
  return render(<I18nextProvider i18n={i18n}>{component}</I18nextProvider>);
};

describe("LanguageSelector Component", () => {
  test("renders the language icon button", () => {
    renderWithI18n(<LanguageSelector />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("opens menu when clicking the language icon", () => {
    renderWithI18n(<LanguageSelector />);
    const button = screen.getByRole("button");
    
    // Click the button to open the menu
    fireEvent.click(button);
    
    // Check if menu items appear
    expect(screen.getByText("🇬🇧 English")).toBeInTheDocument();
    expect(screen.getByText("🇪🇸 Español")).toBeInTheDocument();
    expect(screen.getByText("🇫🇷 Français")).toBeInTheDocument();
    expect(screen.getByText("🇩🇪 Deutsch")).toBeInTheDocument();
  });

  test("changes language when selecting an option", () => {
    renderWithI18n(<LanguageSelector />);
    fireEvent.click(screen.getByRole("button")); // Open menu

    // Select Spanish
    fireEvent.click(screen.getByText("🇪🇸 Español"));

    // Expect i18n language to be updated
    expect(i18n.language).toBe("es");
  });

  test("closes menu when selecting a language", () => {
    renderWithI18n(<LanguageSelector />);
    fireEvent.click(screen.getByRole("button")); // Open menu

    // Select French
    fireEvent.click(screen.getByText("🇫🇷 Français"));

    // Ensure menu is closed after selection
    expect(screen.queryByText("🇬🇧 English")).not.toBeInTheDocument();
  });
});
