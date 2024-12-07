// import { Avatar } from "@shared/components/avatar";
// import { FileUploader } from "@shared/components/common/file-uploader";
// import { INewEmployeePort } from "@shared/interfaces/employees";
// import { FormEvent, useState } from "react";
// import { UseFormReturn } from "react-hook-form";

// interface IPhotoNewEmployeePartFormProps {
//   form: UseFormReturn<INewEmployeePort>;
// }

// export const PhotoNewEmployeePartForm = ({
//   form,
// }: IPhotoNewEmployeePartFormProps) => {
//   const [photo, setPhoto] = useState<string>();
//   const {
//     register,
//     formState: { errors },
//   } = form;

//   const handlePhotoChange = (e: FormEvent<HTMLInputElement>) => {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       setPhoto(e.target?.result as string);
//     };
//     if (e.currentTarget.files) {
//       reader.readAsDataURL(e.currentTarget.files[0]);
//     }
//   };

//   const handleDeletePhoto = () => {
//     form.resetField("photo");
//     setPhoto(undefined);
//   };
//   return (
//     <div>
//       <h1 className="mb-6 text-lg font-bold text-gray-90">Фото</h1>
//       <div>
//         <div className="flex gap-6 items-center">
//           <Avatar src={photo} width={96} height={96} />
//           <div className="flex flex-col items-center pe-12 border-e border-gray-20">
//             <FileUploader
//               id="photo-uploader"
//               error={errors.photo?.message}
//               onInput={handlePhotoChange}
//               accept="image/png, image/jpeg"
//               {...register("photo")}
//             >
//               Загрузить фото
//             </FileUploader>
//             <p
//               className="text-gray-90 mt-2 cursor-pointer"
//               onClick={handleDeletePhoto}
//             >
//               Удалить
//             </p>
//           </div>
//           <div className="text-xl text-gray-90">
//             Требования к фото:
//             <ul className="list-decimal ms-4 text-sm mt-2">
//               <li>Минимум 400 x 400px</li>
//               <li>Максимум 2MB</li>
//               <li>Отчётливо видно лицо</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
