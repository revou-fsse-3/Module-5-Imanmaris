
import { CSSProperties, ReactNode } from "react";
import styled from "styled-components";

interface Props {
    children: ReactNode;
    display?: CSSProperties['display'];
    paddingLeft?: CSSProperties['paddingLeft'];
    paddingRight?: CSSProperties['paddingRight'];
    paddingTop?: CSSProperties['paddingTop'];
    paddingBottom?: CSSProperties['paddingBottom'];
    marginTop?: CSSProperties['marginTop'];
    marginBottom?: CSSProperties['marginBottom'];
    marginRight?: CSSProperties['marginRight'];
    marginLeft?: CSSProperties['marginLeft'];

}

const BaseCard = styled.div<Props>`

    display: ${(props) => props.display}
    padding-left: ${(props) => props.paddingLeft}
    padding-right: ${(props) => props.paddingRight}
    padding-top: ${(props) => props.paddingTop}
    padding-bottom: ${(props) => props.paddingBottom}
    margin-top: ${(props) => props.marginTop}
    margin-bottom: ${(props) => props.marginBottom}
    margin-right: ${(props) => props.marginRight}
    margin-left: ${(props) => props.marginLeft}

`;

const Card = ({ children, ...restProps}: Props) => {

    return (
       <BaseCard {...restProps}>
        {children}
       </BaseCard>
    )
}

export default Card

