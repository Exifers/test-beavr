**Requirements**
- As a user, WHEN I come to the website, I see a list of requirements
- As a user, I see that each item of the requirement list contains:
  - The requirement name
  - The requirement status, computed as explained below:

**Requirement status computation**

<u>Definition</u>: We define as **active** a document version which verifies `effectiveAt <= today <= effectiveUntil`.

<u>Computation</u>:
- IF the requirement is not linked to any document version, THEN the status is "MISSING"
- ELSE IF the requirement is linked to at least one active validated document version, THEN the status is "VALIDATED"
- ELSE IF the requirement is linked to at least one active not validated document version, THEN the status is "DRAFT"
- ELSE, NECESSARILY the requirement is linked to a not active document version, THEN the status is "OUTDATED"

**Navigation**
- As a user, WHEN I come to the website, I see a navbar with two items: requirements and documents
- As a user, WHEN I click on requirements, I am redirected to the requirements page
- As a user, WHEN I click on documents, I am redirected to the documents page
