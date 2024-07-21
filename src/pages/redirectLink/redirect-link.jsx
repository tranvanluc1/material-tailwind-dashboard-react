import { useEffect } from "react";


export function RedirectLink() {

  useEffect(() => {
    document.title = "SAN PHAM DECOR"
    document.images = "https://sanphamdecor.com/wp-content/uploads/2021/09/Logo-San-Pham-Decor-1.png"
    document.description = "Day la phan description"
  }, [])

  return (
    <div>
    1
    </div>
    
  );
}

export default RedirectLink