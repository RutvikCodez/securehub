import { linkDataType, managerButtonDataType } from "./types";

export const headerLinkData = [
  {
    name: "Email Validator",
    link: "#",
  },
  {
    name: "Password Manager",
    link: "#",
  },
];

export const heroSectionLinkData: linkDataType = [
  {
    name: "Try Email Validator",
    link: "#",
    style: {
      backgroundColor: "hsl(var(--primary-foreground))",
      color: "hsl(var(--primary));",
    },
  },
  {
    name: "Explore Password Manager",
    link: "#",
    style: {
      border: "1px solid hsl(var(--primary-foreground))",
      color: "hsl(var(--primary-foreground))",
    },
  },
];

export const passwordManagerData = [
  {
    title: "Password Generation",
    desc: "Our password generator creates strong, unique passwords that are impossible to guess.",
  },
  {
    title: "Secure Storage",
    desc: "Store your passwords securely in our encrypted vault, accessible only with your master password.",
  },
];

export const pricingCardData = [
  {
    title: "Free",
    desc: "For personal use",
    data: [
      "Email Validator",
      "Password Manager",
      "Encrypted Storage",
      "Password Generator",
    ],
  },
  {
    title: "Pro",
    desc: "For small teams",
    data: [
      "Email Validator",
      "Password Manager",
      "Encrypted Storage",
      "Password Generator",
      "Team Sharing",
      "Advanced Reporting",
    ],
  },
  {
    title: "Enterprise",
    desc: "For large organizations",
    data: [
      "Email Validator",
      "Password Manager",
      "Encrypted Storage",
      "Password Generator",
      "Team Sharing",
      "Advanced Reporting",
      "SSO Integration",
      "Dedicated Support",
    ],
  },
];

export const accrodianData = [
  {
    title: "How secure is the password manager?",
    desc: "Our password manager uses industry-leading encryption to ensure your passwords are stored securely. Your master password is the only way to access your vault.",
  },
  {
    title: "How accurate is the email validator?",
    desc: "Our email validator checks for common typos, invalid domains, and other issues to ensure a high degree of accuracy. We're constantly updating our algorithms to provide the best results.",
  },
  {
    title: "What's the difference between the plans?",
    desc: "The Free plan is for personal use, while the Pro and Enterprise plans offer additional features like team sharing, advanced reporting, and SSO integration for businesses and organizations.",
  },
];

export const contactFormData = [
  {
    id: "name",
    labelName: "Name",
    type: "text",
    placeholder: "John Doe",
  },
  {
    id: "email",
    labelName: "Email",
    type: "email",
    placeholder: "example@domain.com",
  },
];

export const footerLinkData = [
  {
    name: "Privacy",
    link: "#",
  },
  {
    name: "Terms",
    link: "#",
  },
  {
    name: "Security",
    link: "#",
  },
];

export const ManagerLabelCheckboxData = [
  {
    id: "uppercase",
    defaultChecked: true,
  },
  {
    id: "lowercase",
    defaultChecked: true,
  },
  {
    id: "numbers",
    defaultChecked: true,
  },
  {
    id: "symbols",
    defaultChecked: false,
  },
];

export const generatorLabelCheckboxData = [
  {
    id: "webiste",
    type: "text",
    placeholder: "example.com",
  },
  {
    id: "Username",
    type: "text",
    placeholder: "johndoe",
  },
  {
    id: "password",
    type: "password",
    placeholder: "",
  },
];

export const managerButtonData: managerButtonDataType = [
  {
    name: "Delete",
    variant: "outline",
    type: "button"
  },
  {
    name: "Edit",
    variant: "outline",
    type: "button"
  },
  {
    name: "Save",
    type: "submit"
  },
]

export const passwordData = [
  {
    website: "http://example.com",
    name: "John Doe"
  },
  {
    website: "http://example.com",
    name: "John Doe"
  },
  {
    website: "http://example.com",
    name: "John Doe"
  },
  {
    website: "http://example.com",
    name: "John Doe"
  },
  {
    website: "http://example.com",
    name: "John Doe"
  },
]
