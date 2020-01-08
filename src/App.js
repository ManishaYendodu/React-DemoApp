import React from 'react';
import logo from './logo.svg';
import './App.css';
import People from './components/functionalcomponent';
import Welcome from './components/classcompoenet';
import Message from './components/statees';
import Counter from './components/counter';
import Functionclick from './components/functionclick';
import Classclick from './components/Cassclick';
import Eventbind from './components/Eventbind';
import Parentcomponent from './components/Parentcomponent';
import User from './components/User';
import Nameslist from './components/Nameslist';
import StyleSheet from './components/Stylesheet';
import Inlinecss from './components/Inlinecss';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import Fragmentdemo from './components/Fragmentdemo';
import Table from './components/Table';
import ParentregularComponent from './components/ParentregularComponent';
import Refsdemo from './components/Refsdemo';
import ClassReffocus from './components/ClassReffocus';
import ForwardParentRef from './components/ForwardParentRef';
import PortalDemo from './components/PortalDemo';
import ErrorHerro from './components/ErrorHerro';
import EorrorBoundary from './components/EorrorBoundary';
import HigerOrderClickCounter from './components/HigerOrderClickCounter';
import HigherOrderHoverCounter from './components/HigherOrderHoverCounter';
import HttpRequest from './components/HttpRequest';
import HttpPostRequest from './components/HttpPostRequest';
import HooksUseState from './components/HooksUseState';
import Hookcounter from './components/Hookcounter';
import UseEffectHook from './components/UseEffectHook';
import DatafetchUseEffect from './components/DatafetchUseEffect';
import UseReducerHook from './components/UseReducerHook';
import UseReducerHookTwo from './components/UseReducerHookTwo';
import DataFetchingReduceEffect from './components/DataFetchingReduceEffect';

function App() {
  return (
    <div className="App">
      {/* <DataFetchingReduceEffect /> */}
      {/* <UseReducerHookTwo />
      <UseReducerHook /> */}
      {/* <DatafetchUseEffect /> */}
      {/* <UseEffectHook />
      <Hookcounter /> */}
      {/* <HooksUseState /> */}
      {/* <HttpPostRequest />
      <HttpRequest /> */}
      {/* <HigerOrderClickCounter name="Poornima"/>
      <HigherOrderHoverCounter /> */}
      {/* <EorrorBoundary>
        <ErrorHerro heroName="batman"></ErrorHerro>
      </EorrorBoundary>
      <EorrorBoundary>
        <ErrorHerro heroName="spiderman"></ErrorHerro>
      </EorrorBoundary>
      <EorrorBoundary>
        <ErrorHerro heroName="joker"></ErrorHerro>
      </EorrorBoundary>
      <PortalDemo /> */}
      {/* <ForwardParentRef />
      <ClassReffocus />
      <Refsdemo />
      <ParentregularComponent /> */}
      {/* <Table />
      <Fragmentdemo /> */}
      <LifecycleA />
      {/* <Form /> */}
      {/* <Inlinecss />
      <StyleSheet primary={true}/>
      <Nameslist />
      <User />
      <Parentcomponent />
      <People name="poornima">
        <p>childern text</p>
      </People>
      <People name="poornima shetty" />
      <Welcome name="poornima" /> 
      <Message />
      <Counter />
      <Functionclick />
      <Classclick />
      <Eventbind /> */}
    </div>
  );
}

export default App;
