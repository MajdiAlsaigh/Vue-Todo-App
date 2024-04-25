import swal from "sweetalert";

export function useFlashAlert() {
  function FlashAlert(title, message, icon = "success") {
    return swal(title, message, icon);
  }

  return { FlashAlert };
}
