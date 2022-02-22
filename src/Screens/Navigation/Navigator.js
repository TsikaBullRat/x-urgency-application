import React, {useState, useEffect, createElement, Children} from "react"
import { } from "react-native"

export const Navigator = ({ selected , children}) =>{

    return (
        children[selected]
    )
}