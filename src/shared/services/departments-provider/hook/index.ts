import { IDepartmentsContextValue } from '@shared/services/departments-provider/interfaces';
import { createContext, useContext } from 'react';

const DepartmentContextDefaultValue: IDepartmentsContextValue = {
  isLoading: true,
};

const DepartmentContext = createContext<IDepartmentsContextValue>(
  DepartmentContextDefaultValue
);

const useDeparmentsContext = () =>
  useContext<IDepartmentsContextValue>(DepartmentContext);

export {
  DepartmentContext,
  useDeparmentsContext,
  DepartmentContextDefaultValue,
};
