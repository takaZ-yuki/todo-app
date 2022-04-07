import { useNavigate } from "react-router-dom";

export const useClickLink = () => {
  const navigate = useNavigate();

  const onClickLink = (href: string) => {
    if (href) {
      navigate(href);
    }
  }

  return [onClickLink];
}