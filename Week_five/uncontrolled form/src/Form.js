import { useRef } from "react";
export default function Form() {
  const usr = useRef(null);
  const name = useRef(null);
  const phone = useRef(null);
  var fixedValue = "React Test";
  const resetForm = () => {
    /*Reset Form Field*/
    usr.current.value = null;
    phone.current.value = null;
    name.current.value = null;
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (usr.current.value === "") {
            alert("UserName Field is mendatory");
          } else if (phone.current.value === "") {
            alert("Phone No Field is mendatory");
          } else {
            name.current.value = fixedValue;
            /*Print Value*/
            console.log("User Name : " + usr.current.value);
            console.log("Phone : " + phone.current.value);
            console.log("Exam : " + name.current.value);
            /*Reseting the form*/
            resetForm();
          }
        }}
      >
        Username : <input type="text" id="usr" ref={usr} />
        <br />
        <br />
        Phone No : <input type="tel" id="phone" ref={phone} />
        <br />
        <br />
        Exam : <input type="text" id="name" ref={name} disabled />
        <br />
        <br />
        <input type="submit" />
      </form>
    </>
  );
}
