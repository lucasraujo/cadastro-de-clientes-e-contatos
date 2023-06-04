
export interface IContact {
    id: number;
    fullName: string;
    email: string;
    phoneNumber: string;
    RegistrationDate: string;
  }
  
export interface IClient {
    id: number;
    fullName: string;
    email: string;
    phoneNumber: string;
    RegistrationDate: string;
    contacts: IContact[];
  }
  
export interface ICompany {
    id: number;
    companyName: string;
    email: string;
    password: string;
    clients: IClient[];
  }
  
