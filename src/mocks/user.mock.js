const role = {
  CLIENT: "client",
  DEVELOPER: "developer",
  PRODUCT_OWNER: "product_owner",
  QUALITY_ASSURANCE: "quality_assurance",
};

const country = {
  BR: "BR",
  USA: "USA",
};

const brazilianUsers = [
  {
    country: country.BR,
    email: "po@mail.com.br",
    id: "31cb6515-ef04-4b9d-900e-a5b9fcaaa1d8",
    name: "Kaique Pedro Henrique da Rocha",
    role: role.PRODUCT_OWNER,
  },
  {
    country: country.BR,
    email: "dev@mail.com.br",
    id: "4d9f4a1d-41ca-4b27-8ad4-523d45cad82d",
    name: "Ester Sabrina Caldeira",
    role: role.DEVELOPER,
  },
  {
    country: country.BR,
    email: "qa@mail.com.br",
    id: "31ca81a7-f60c-4ee7-b6e4-a0d75668f204",
    name: "Marina Olivia Andreia Drumond",
    role: role.QUALITY_ASSURANCE,
  },
  {
    country: "BR",
    email: "client1@mail.com.br",
    id: "71b524ed-bb1f-4e9e-9a40-9e32921a0d32",
    name: "Renan Bento Castro",
    role: role.CLIENT,
  },
  {
    country: country.BR,
    email: "client2@mail.com.br",
    id: "b82b0f4c-ada0-42a2-b2b2-e58cc0ff3aca",
    name: "Eduardo Lucas da Rosa",
    role: role.CLIENT,
  },
];

const americanUsers = [
  {
    country: country.USA,
    email: "po@mail.com",
    id: "8ce973bb-8ba1-4822-baa8-abbb2a52db88",
    name: "Spencer Bell",
    role: role.PRODUCT_OWNER,
  },
  {
    country: country.USA,
    email: "dev@mail.com",
    id: "6d76864b-fff3-4144-a343-5ea4b5a42a34",
    name: "John S. Potter",
    role: role.DEVELOPER,
  },
  {
    country: country.USA,
    email: "qa@mail.com",
    id: "2f4c52fe-91ac-459d-9b9d-5a434b33eb6b",
    name: "Angela O. Holland",
    role: role.QUALITY_ASSURANCE,
  },
  {
    country: country.USA,
    email: "client1@mail.com",
    id: "dc41068a-e4b9-4d7c-849f-93177c142cd0",
    name: "Lucy W. Brown",
    role: role.CLIENT,
  },
  {
    country: country.USA,
    email: "client2@mail.com",
    id: "30c3e87c-07e4-4ad3-9659-499d8bf1d09c",
    name: "Thomas V. Wilson",
    role: role.CLIENT,
  },
];

export default [...brazilianUsers, ...americanUsers];
