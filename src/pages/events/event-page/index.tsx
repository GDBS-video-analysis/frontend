import { useGetEventPresenter } from "@entities/case/events/get-event/presenter";
import { UpdateEventForm } from "@features/forms/events/update";
import { Button } from "@shared/components/common/button";
import { useState } from "react";

const EventPage = () => {
  const { form } = useGetEventPresenter();

  const [isFormDisabled, setIsFormDisabled] = useState(true);
  return (
    <div className="bg-default-white p-4">
      event page
      <div className="flex justify-between">
        <h2>Информация</h2>
        <Button
          intent="link"
          onClick={() => setIsFormDisabled((prev) => !prev)}
        >
          {isFormDisabled ? "Редактировать" : "Отменить"}
        </Button>
      </div>
      <UpdateEventForm form={form} isDisabled={isFormDisabled} />
    </div>
  );
};

export default EventPage;
