interface IEmployee {
  registration: string;
  salary: number;
  admissionDate: Date;
  generateRegistration(): string;
}

export default IEmployee;