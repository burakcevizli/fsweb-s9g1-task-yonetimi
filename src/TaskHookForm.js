import React from 'react'
import { useForm } from 'react-hook-form';

export default function TaskHookForm({kisiler , submitFn}) {
  const { register, handleSubmit, formState: { errors } } = useForm({mode:"all"});
  const onSubmit = (data) =>submitFn(data)
  


  console.log(errors)
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title">Başlığınız :</label>
      <input
        type="text"
        id="title"
        placeholder="Title"
        {...register("title", {
          required: "Başlık alanı boş bırakılamaz !",
          minLength: {
            value: 3,
            message: "Başlık en az 3 karakter içermelidir",
          }
        })}
      />
      {errors.title && <p>{errors.title.message}</p>}
      
      <label htmlFor="description">Açıklama :</label>
      <input
        type="text"
        id="description"
        placeholder="Açıklama"
        {...register("description", {
          required: "Mutlaka Açıklama Yazmalısınız!",
          minLength: {
            value: 10,
            message: "Açıklama en az 10 karakter içermelidir",
          }
        })}
      />
      {errors.description && <p>{errors.description.message}</p>}

      <label>İnsanlar :</label>
      {kisiler.map((herbirkisi, i) => (
        <div key={i}>
          <input
            type="checkbox"
            {...register('people', {
              required: 'En az bir kişi seçmelisiniz !',
            })}
          />
          {herbirkisi}
        </div>
      ))}
      {errors.people && <p>{errors.people.message}</p>}
      <input type="submit"  value="Görevi Ekle"/>
    </form>
  );
}
