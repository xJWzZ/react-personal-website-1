import React from 'react'

function Person({person, people}) {
    function findPersonById(people, id) {
        return people.find((person) => person.id === id);
    }

    return (
        <div>
          <p>Name: {person.firstName} {person.lastName}</p>
          <p>Mother: {findPersonById(people, person.motherID)?.firstName }  {findPersonById(people, person.motherID)?.lastName}</p>
          <p>Father: {findPersonById(people, person.fatherID)?.firstName} {findPersonById(people, person.fatherID)?.lastName}</p>
          <p>Spouse: {findPersonById(people, person.spouseID)?.firstName} {findPersonById(people, person.spouseID)?.lastName}</p>
          {/* Render children here */}
        </div>
      );
}

export default Person