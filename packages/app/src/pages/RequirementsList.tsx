import { Requirement } from "../api/Requirement.ts";

export function RequirementsList() {
  const { data: requirements } = Requirement.useList()
  return (
    <>
      <h2>Requirements</h2>
      <ul>
        {requirements?.map(requirement => (
          <li
            key={requirement.id}
            {...requirement.description && { title: requirement.description }}
          >
            {requirement.name} {requirement.status}
          </li>
        ))}
      </ul>
    </>
  )
}