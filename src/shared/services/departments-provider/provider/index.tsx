import { useGetDepartmentsPresenter } from "@entities/case/departments/presenter";
import {
  DepartmentContext,
  DepartmentContextDefaultValue,
} from "@shared/services/departments-provider/hook";
import { IDepartmentsContextValue } from "@shared/services/departments-provider/interfaces";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export const DepartmentsProvider = () => {
  const [value, setValue] = useState<IDepartmentsContextValue>(
    DepartmentContextDefaultValue
  );
  const { isLoading, data } = useGetDepartmentsPresenter();

  useEffect(() => {
    setValue({
      isLoading,
      data,
    });
  }, [isLoading, data]);

  return (
    <DepartmentContext.Provider value={value}>
      <Outlet />
    </DepartmentContext.Provider>
  );
};
