import React from 'react';

const ToDo = () => {
  return (
    <table>
      <tr>
        <th>Backlog</th>
        <th>To Do</th>
        <th>In Progress</th>
        <th>Completed</th>
      </tr>
      <tr>
        <td>
          <li><input
                type="text"
                placeholder="something to do?"/></li>
        </td>
        <td>
          <li><input
                type="text"
                placeholder="something needs doing NAU"/></li>
        </td>
        <td>
          <li><input
                type="text"
                placeholder="I'm DOING it"/></li>
        </td>
        <td>
          <li><input
                type="text"
                placeholder="Donezo!!"/></li>
        </td>
      </tr>
    </table>
  )
}

export default ToDo;
