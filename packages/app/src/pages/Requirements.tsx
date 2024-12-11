import { Requirement } from "../api/Requirement.ts";


export function Requirements() {
  const { data: requirements } = Requirement.useList()
  return (
    <>
      <h2>Requirements</h2>
      <ul>
        {requirements?.map(requirement => (
          <li key={requirement.id} title={requirement.description}>
            {requirement.name}
          </li>
        ))}
      </ul>
    </>
  )
}