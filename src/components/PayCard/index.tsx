import { useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../providers/Authentication";
import ConfirmedModal from "../ConfirmedModal";
import { RowBox, PayCardStyled } from "./styles";

interface PayCardProps {
  img: any;
  planName: string;
  anouncesQuantity: string;
  price: number;
  handlePlan: (planName: string) => void;
}

export const PayCard = ({
  img,
  planName,
  anouncesQuantity,
  price,
  handlePlan,
}: PayCardProps) => {
  const history = useHistory();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenSecondModal, setIsOpenSecondModal] = useState(false);

  const { registerPreviousPage } = useAuth();

  const modalInformation = {
    title: "Assinar plano",
    closeFunction: () => setIsOpenModal(false),
    message: `Você deseja assinar esse plano por R$ ${price}0?`,
    confirmButton: {
      confirmText: "confirmar",
      confirmFunction: () => {
        setIsOpenSecondModal(true);
      },
    },
    cancelButton: {
      cancelText: "cancelar",
      cancelFunction: () => {},
    },
  };

  const secondModalInformation = {
    title: "Parabéns",
    closeFunction: () => setIsOpenModal(false),
    message: `O plano ${planName} foi assinado com sucesso!`,
    confirmButton: {
      confirmText: "voltar",
      confirmFunction: () => {
        history.push("/perfil");
        setIsOpenSecondModal(false);
      },
    },
  };

  return (
    <PayCardStyled>
      {isOpenModal && <ConfirmedModal modalContent={modalInformation} />}
      {isOpenSecondModal && (
        <ConfirmedModal modalContent={secondModalInformation} />
      )}
      <RowBox>
        <img src={img} alt="" />
        <ul>
          <li>{planName}</li>
          <li>{anouncesQuantity}</li>
          <li>R$ {price} / mês</li>
        </ul>
      </RowBox>
      <button
        onClick={() => {
          handlePlan(planName);
          setIsOpenModal(true);
        }}
      >
        assinar
      </button>
    </PayCardStyled>
  );
};
