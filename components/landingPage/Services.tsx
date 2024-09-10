import React from "react";

const Services = () => {
  const servicesData = [
    {
      title: "Email Validator",
      description:
        "Ensure the validity and deliverability of your email addresses. Our email validation service checks for formatting errors and verifies the existence of email accounts to reduce bounce rates.",
    },
    {
      title: "Password Manager",
      description:
        "Safeguard and manage your passwords securely. Our password manager helps you store and organize your passwords in one place, offering strong encryption to protect your credentials.",
    },
    {
      title: "Encrypted Storage",
      description:
        "Store your sensitive information securely with our encrypted storage solutions. We use advanced encryption methods to protect your data from unauthorized access and breaches.",
    },
    {
      title: "Password Generator",
      description:
        "Create strong, random passwords to enhance your security. Our password generator produces complex passwords that are difficult to crack, ensuring your accounts remain protected.",
    },
    {
      title: "Team Sharing",
      description:
        "Facilitate secure sharing of resources and information within your team. Our team sharing solutions provide controlled access to data, ensuring that only authorized members can view or edit shared content.",
    },
    {
      title: "Advanced Reporting",
      description:
        "Generate detailed and insightful reports on your security status and activity. Our advanced reporting tools help you analyze trends, monitor performance, and make informed decisions.",
    },
    {
      title: "SSO Integration",
      description:
        "Simplify user authentication with Single Sign-On (SSO) integration. Our service allows users to access multiple applications with a single set of credentials, improving convenience and security.",
    },
    {
      title: "Dedicated Support",
      description:
        "Receive personalized assistance from our dedicated support team. We offer expert guidance and prompt solutions to address any issues and ensure the smooth operation of your security systems.",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-accent-1 text-white">
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center gap-5">
        <div className="max-w-xl mx-auto w-full flex flex-col gap-2 items-center text-center">
          <h3 className="text-accent-1 text-1 leading-accent-1">
            our services
          </h3>
          <h1 className="text-accent-4 leading-accent-1 font-semibold">
            We Offer Professional Security Solutions
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-4">
            {
                servicesData.map(({description,title}, index)=>(
                    <div key={index} className="p-11 border flex flex-col gap-3 border-accent-1">
                        <h2 className="text-accent-1 font-semibold leading-accent-1">{title}</h2>
                        <p className="text-2 text-accent-5 leading-accent-2 font-light">{description}</p>
                    </div>
                ))
            }
        </div>
      </div>
    </section>
  );
};

export default Services;
