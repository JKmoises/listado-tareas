import Swal from 'sweetalert2/dist/sweetalert2.js';

export const taskValidations = (taskForm) => {
  if (taskForm.name === "") {
    Swal.fire({
      title: "No has agregado una tarea",
      text: "Debes agregar una tarea",
      timer: 3000,
      icon: "error",
    });
    return true;
  }

  if (taskForm.name.length > 30) {
    Swal.fire({
      title: "La descripción de la tarea es muy larga",
      text: "La tarea debe tener hasta 30 caracteres",
      icon: "info",
      timer: 3000,
      customClass: {
        title: "fs-21",
      },
    });
    return true;
  }

  return false;
};