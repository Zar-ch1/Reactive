"use client";
import Image from "next/image";
import styles from "./page.module.css";
import HelloWorld, {AnotherChild} from "@/app/components/helloWorld";
import ClassComponent from "@/app/components/ClassComponent";
import JsxDemo from "@/app/components/JsxDemo";
import Greeting from "@/app/components/Greeting";
import Profile from "@/app/components/Profile";
import Container from "@/app/components/Container";
import Conditional from "@/app/components/Conditional";
import ListDemo from "@/app/components/ListDemo";
import ImpureDemo from "@/app/components/ImpureDemo";
import Counter from "@/app/components/Counter";
import Test from "@/app/components/Test";
import RefEquality from "@/app/components/RefEquality";
import Counter2 from "@/app/components/Counter2";
import UpdateListDemo from "@/app/components/UpdateListDemo";
import UserForm from "@/app/components/UserForm";
import TodoWithReducer from "@/app/components/TodoWithReducer";
import ContextProblem from "@/app/components/ContextProblem";
import ContextDemo from "@/app/components/context/ContextDemo";
import TodoWithReducerContext from "@/app/components/context/TodoWithReducerContext";
import RefDemo from "@/app/components/RefDemo";
import FocusInput from "@/app/components/FocusInput";
import DatePicker from "@/app/components/ref/DatePicker";
import EffectDemo from "@/app/components/effect/EffectDemo";
import FetchTodo from "@/app/components/effect/FetchTodo";
import CleanupDemo from "@/app/components/effect/CleanupDemo";
import DestroyDemo from "@/app/components/effect/DestroyDemo";
import NativeEvent from "@/app/components/effect/NativeEvent";

export default function Home() {
    //console.log('Hello World', HelloWorld())
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Header</h1>
          {/*<Counter/>*/}
          {/*<Counter/>*/}
          {/*<RefEquality/>*/}
          {/*<Counter2/>*/}
          {/*<Test/>*/}
          {/*<UpdateListDemo/>*/}
          {/*<UserForm/>*/}
          {/*<TodoWithReducer/>*/}
          {/*<ContextProblem/>*/}
          {/*<ContextDemo/>*/}
          {/*<TodoWithReducerContext/>*/}
          {/*<RefDemo/>*/}
          {/*<RefDemo/>*/}
          {/*<FocusInput/>*/}
          {/*<DatePicker/>*/}
          {/*<EffectDemo/>*/}
          {/*<FetchTodo/>*/}
          {/*<CleanupDemo/>*/}
          {/*<DestroyDemo/>*/}
          <NativeEvent/>
      </div>

      <div className={styles.center}>

      </div>

      <div className={styles.grid}>
       {/*<AnotherChild/>
            <HelloWorld/>
                <ClassComponent/>*/}
          {/*<JsxDemo/>*/}
          {/*<Greeting name={"TK"} age={39}/>*/}
          {/*<Greeting name={"Someone"} age={26}/>*/}
          {/*<Profile profile={{imgUrl: "https://randomuser.me/api/portraits/men/63.jpg", name:"TK"}}/>*/}
          {/*<Container message={"Message from Page"}>
              <h1>Hello</h1>
              <div>How!</div>
             </Container>*/}
          {/*<Conditional isAdmin={true}/>*/}
          {/*<ListDemo/>*/}
          {/*<ImpureDemo/>*/}
          {/*<Counter/>*/}
          {/*<Test name={"Mg Mg"}/> //Props can change the UI but props is constant*/}
          {/*<RefEquality/>*/}

      </div>
    </main>
  );
}
