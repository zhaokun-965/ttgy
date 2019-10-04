import styled from "styled-components";

export const TabBarWrapper = styled.div `
    width:100%;
    height:.44rem;
    position:fixed;
    left:0;
    bottom:0;
    background:#fff;
    border-top:1px solid #ccc;
    ul,li{
        width:100%;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    a{
       display:flex;
       width:100%;
       height:100%;
       flex-direction:column;
       justify-content:center;
       align-items:center; 
    }
    a span{
        font-size:.10rem;
    }
    i{
        font-size:.2rem;
    }
    .active{
        color:#c33;
    }
`