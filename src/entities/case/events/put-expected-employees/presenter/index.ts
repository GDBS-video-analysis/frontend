import { usePutExpectedEmployeesUseCase } from '@entities/case/events/put-expected-employees/use-case';
import { IEmployee } from '@shared/interfaces/employees';
import { IEventIdQueryParams } from '@shared/interfaces/params/event';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const usePutExpectedEmployeesPresenter = (employees: IEmployee[]) => {
  const { eventId } = useParams() as unknown as IEventIdQueryParams;
  const [expectedEmployeesIds, setExpectedEmployeesIds] = useState<number[]>(
    employees.map((employee) => employee.employeeID)
  );

  const { mutateAsync } = usePutExpectedEmployeesUseCase();

  const handleSubmit = () => {
    mutateAsync({ eventId, employeesIds: expectedEmployeesIds });
  };

  const onToggleEmployee = (employeeId: number) => {
    setExpectedEmployeesIds((prev) => {
      if (!prev.some((empId) => empId === employeeId))
        return [...prev, employeeId];
      return [...prev.filter((empId) => empId !== employeeId)];
    });
  };

  return { handleSubmit, onToggleEmployee, expectedEmployeesIds };
};
