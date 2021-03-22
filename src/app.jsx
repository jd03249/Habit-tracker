import React, { Component } from 'react';
import './App.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state ={
    habits: [
        {id: 1, name: 'Reading', count: 0},
        {id: 2, name: 'Running', count: 0},
        {id: 3, name: 'Coding', count: 0},
    ],
};
handleIncrement = habit =>{
  const habits = [...this.state.habits]; //...:아이템들을 새로운 배열에 각각 복사
  const index = habits.indexOf(habit); //indexOf:배열의 몇번째에 있는지 확인
  habits[index].count++;
  this.setState({ habits: habits}); //key: 로컬변수 배열
};

handleDecrement = habit =>{
  const habits = [...this.state.habits]; //Spread Operator(...)을 이용한 이유->직접 배열의 state를 수정하는것은 좋지 않기 때문
  const index = habits.indexOf(habit); 
  const count =  habits[index].count - 1;
  habits[index].count = count < 0 ? 0 : count;
  this.setState({ habits }); //key와 로컬변수 배열 이름이 같으면 하나로 생략 가능
};

handleDelete =habit =>{
  const habits = this.state.habits.filter(item => item.id !== habit.id);
  this.setState({ habits });
};

  render() {
    return (
        <>
        <Navbar 
          totalCount={this.state.habits.filter(item => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
        </>
    )}
}

export default App;
