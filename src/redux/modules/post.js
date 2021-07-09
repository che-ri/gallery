import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { firestore } from "../../shared/firebase";
import { history } from "../configureStore";
import firebase from "firebase/app";

const GET_POST = "GET_POST";
const ADD_POST = "ADD_POST";
const DEL_POST = "DEL_POST";
