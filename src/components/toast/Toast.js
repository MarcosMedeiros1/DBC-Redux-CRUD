import Swal from "sweetalert2";

export const Toast = Swal.mixin({
  toast: true,
  position: "top",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
});

export const confirmModal = (title, id, dispatch, handleDelete, id2) => {
  Swal.fire({
    title: title,
    confirmButtonText: "Confirmar",
    showDenyButton: true,
    denyButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      id2 ? handleDelete(id, id2, dispatch) : handleDelete(id, dispatch);
    }
  });
};
