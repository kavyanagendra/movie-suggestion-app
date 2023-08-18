import { ReactNode } from "react";

interface Props{
    children: ReactNode;
}

// export const Alert = ({ children }: Props) => {
//   return <div className="alert alert-primary">{children}</div>;
// };

export default function Alert({children}:Props){
    return (
      <div className="alert alert-warning alert-dismissible fade show" role="alert">
        {children}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    );
}


