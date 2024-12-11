INSERT INTO "Document" ("id", "title", "description") VALUES ('climate-change-action-plan', 'Climate change action plan', 'Detailed plan addressing climate change-related impacts, risks and opportunities and detailing specific actions to be taken to address climate change through mitigation and adaptation strategies');
INSERT INTO "Document" ("id", "title", "description") VALUES ('climate-change-policy', 'Climate change policy', 'Policy document outlining an organization''s commitment, strategies, and actions to address climate change');
INSERT INTO "Document" ("id", "title", "description") VALUES ('climate-change-training-slides', 'Climate change training slides', 'Educational materials designed to inform and train on climate change impacts, mitigation, and adaptation strategies');
INSERT INTO "Document" ("id", "title", "description") VALUES ('climate-change-training-attendance', 'Climate change training attendance sheet', 'Record of participants who attended climate change-related training sessions');
INSERT INTO "Document" ("id", "title", "description") VALUES ('climate-change-reporting', 'Reporting relative to climate change adaptation and mitigation', 'Report presenting the main KPIs relative to climate change adaptation and mitigation');
INSERT INTO "Document" ("id", "title", "description") VALUES ('corruption-policy', 'Commitment and targets on anti-corruption', 'Formalized commitments and targets relative to corruption.');
INSERT INTO "Document" ("id", "title", "description") VALUES ('ethics-charter', 'Ethics charter', 'Formalized policy presenting the commitments made and actions implemented relating to the management of business ethics. The document should cover multiple ethics issues such as corruption, fraud, etc.');
INSERT INTO "Document" ("id", "title", "description") VALUES ('conflicts-interest-policy', 'Commitment and targets on conflicts of interest', 'Formalized commitments and targets relative to conflicts of interest.');
INSERT INTO "Document" ("id", "title", "description") VALUES ('corruption-training-slides', 'Corruption training presentation', 'Provide evidence of recurring corruption awareness training by your employees.');
INSERT INTO "Document" ("id", "title", "description") VALUES ('corruption-training-attendance', 'Corruption training attendance sheet', 'Provide evidence of corruption awareness training completion by your employees.');
INSERT INTO "Document" ("id", "title", "description") VALUES ('corruption-fraud-procedure', 'Corruption and fraud management procedure', 'Procedure detailing how the organization prevents, identifies, and remediates situations of fraud and corruption.');
INSERT INTO "Document" ("id", "title", "description") VALUES ('expense-procedure', 'Expense management procedure', 'Procedure detailing rules set relative to employee expenses: thresholds, approval mechanisms, etc.');
INSERT INTO "Document" ("id", "title", "description") VALUES ('gifts-invitations-procedure', 'Gifts and invitations procedure', 'Procedure detailing rules set relative to gits and invitations: circumstances under which they can be accepted, maximum amounts, declaration, approval mechanisms.');
INSERT INTO "Document" ("id", "title", "description") VALUES ('fraud-corruption-audit', 'Fraud and corruption audit schedule', 'Provide evidence of an audit program in place to investigate effectiveness of control procedures in place.');
INSERT INTO "Document" ("id", "title", "description") VALUES ('financial-statements-audit', 'Financial statements auditing mission letter', 'Provide evidence of financial statements verification by a third-party auditor.');
INSERT INTO "Document" ("id", "title", "description") VALUES ('kyc-procedure', 'KYC procedure', 'Procedure detailing rules and processes in place to verify third-party identity prior to establishing a business relationship');
INSERT INTO "Document" ("id", "title", "description") VALUES ('anti-corruption-report', 'Anti-corruption KPIs reporting', 'Report presenting the main KPIs monitored to measure the impact of anti-corruption initiatives');
INSERT INTO "Document" ("id", "title", "description") VALUES ('iso-37001-certificate', 'ISO37001 certificate', 'Certificate provided by an approved third-party auditor proving the organization''s endorsement of ISO37001 principles.');

INSERT INTO "Requirement" ("id", "name", "description") VALUES ('SPgRhLRUXT', 'Climate change action plan oversight / effectiveness', 'Internal monitoring and governance are in place to oversee the implementation and effectiveness of the action plan related to climate change adaptation and mitigation, ensuring objectives are met and improvements are made');
INSERT INTO "_DocumentToRequirement" ("B", "A") VALUES ('SPgRhLRUXT', 'climate-change-action-plan');

INSERT INTO "Requirement" ("id", "name", "description") VALUES ('jX6OT6nvfB', 'Climate change adaptation and mitigation targets', 'The organization has set targets related to the adaptation and mitigation of climate change impacts');
INSERT INTO "_DocumentToRequirement" ("B", "A") VALUES ('jX6OT6nvfB', 'climate-change-policy');

INSERT INTO "Requirement" ("id", "name", "description") VALUES ('PUE3S0yfzN', 'Climate change adaptation and mitigation targets oversight', 'Internal monitoring and governance mechanisms are in place to oversee the achievement of targets related to climate change adaptation and mitigation, ensuring alignment with strategic objectives and compliance with established policies');
INSERT INTO "_DocumentToRequirement" ("B", "A") VALUES ('PUE3S0yfzN', 'climate-change-policy');

INSERT INTO "Requirement" ("id", "name", "description") VALUES ('anLW9i0ZWL', 'Awareness training on climate actions', 'The organization has established training programmes for employees to raise awareness and understanding on climate change and initiatives deployed to foster adaptation or mitigation');
INSERT INTO "_DocumentToRequirement" ("B", "A") VALUES ('anLW9i0ZWL', 'climate-change-training-attendance');
INSERT INTO "_DocumentToRequirement" ("B", "A") VALUES ('anLW9i0ZWL', 'climate-change-training-slides');

INSERT INTO "Requirement" ("id", "name", "description") VALUES ('gHq5nWjwVf', 'Climate change-related financial impacts oversight (methodology and assumptions)', 'A clear methodology for calculating climate change-related financial impacts has been formalized, laying out the calculation steps, data sources used and assumptions made');
INSERT INTO "_DocumentToRequirement" ("B", "A") VALUES ('gHq5nWjwVf', 'climate-change-reporting');

INSERT INTO "Requirement" ("id", "name", "description") VALUES ('nY1WcVPiwf', 'Climate change-related financial impact reporting', 'The organization tracks and reports KPIs related to climate change-related financial impacts');
INSERT INTO "_DocumentToRequirement" ("B", "A") VALUES ('nY1WcVPiwf', 'climate-change-reporting');

INSERT INTO "Requirement" ("id", "name", "description") VALUES ('KIYL6PCsx9', 'Anti-corruption policy', 'The company has formalized an anti-corruption or anti-bribery policy  - that is consistent with the UN Convention against Corruption - for which the timetable for implementation is clearly defined - with a clear communication plan to relevant populations ');
INSERT INTO "_DocumentToRequirement" ("B", "A") VALUES ('KIYL6PCsx9', 'ethics-charter');
INSERT INTO "_DocumentToRequirement" ("B", "A") VALUES ('KIYL6PCsx9', 'corruption-policy');

INSERT INTO "Requirement" ("id", "name", "description") VALUES ('TrU499fKiB', 'Policy on conflicts of interest', 'The organization has formalized a Policy committing to the identification, disclosure, and management of conflicts between personal interests and the organization''s interests to ensure integrity and transparency in decisions.');
INSERT INTO "_DocumentToRequirement" ("B", "A") VALUES ('TrU499fKiB', 'ethics-charter');
INSERT INTO "_DocumentToRequirement" ("B", "A") VALUES ('TrU499fKiB', 'conflicts-interest-policy');

INSERT INTO "Requirement" ("id", "name", "description") VALUES ('VYxfCZTKU4', 'Anti-corruption training', 'The organization has set up training programmes for internal stakeholders regarding anti-corruption or anti-bribery The organization clearly provides - Details on nature, scope and depth of training programmes - Whether supervisory bodies participate or not - An analysis of training activities (by region or by category)');
INSERT INTO "_DocumentToRequirement" ("B", "A") VALUES ('VYxfCZTKU4', 'corruption-training-attendance');
INSERT INTO "_DocumentToRequirement" ("B", "A") VALUES ('VYxfCZTKU4', 'corruption-training-slides');

INSERT INTO "Requirement" ("id", "name", "description") VALUES ('xiUNuG4OOI', 'Control procedures to prevent and address corruption', 'The organization has procedures in place to prevent, detect and address allegations or incidents of corruption Procedures clearly specify - investigators or investigating committee and whether they''re separate from internal Legal team - how outcomes are reported to administrative, management and supervisory bodies - deployment plans throughout the organization');
INSERT INTO "_DocumentToRequirement" ("B", "A") VALUES ('xiUNuG4OOI', 'gifts-invitations-procedure');
INSERT INTO "_DocumentToRequirement" ("B", "A") VALUES ('xiUNuG4OOI', 'expense-procedure');
INSERT INTO "_DocumentToRequirement" ("B", "A") VALUES ('xiUNuG4OOI', 'corruption-fraud-procedure');

INSERT INTO "Requirement" ("id", "name", "description") VALUES ('WsvaL4T4eo', 'Audit of control procedures', 'The organization has mechanisms or processes in place to regularly evaluate the effectiveness of internal controls and procedures, aiming to mitigate risks, ensure compliance, and safeguard the organization''s integrity.');
INSERT INTO "_DocumentToRequirement" ("B", "A") VALUES ('WsvaL4T4eo', 'financial-statements-audit');
INSERT INTO "_DocumentToRequirement" ("B", "A") VALUES ('WsvaL4T4eo', 'fraud-corruption-audit');

INSERT INTO "Requirement" ("id", "name", "description") VALUES ('N1Jx5brPau', 'Corruption due diligence', 'The organization has mechanisms or processes in place to conduct due diligence on corruption risks in business relationships and transactions, aimed at identifying and mitigating potential corruption before engagement.');
INSERT INTO "_DocumentToRequirement" ("B", "A") VALUES ('N1Jx5brPau', 'kyc-procedure');

INSERT INTO "Requirement" ("id", "name", "description") VALUES ('FKW3sGjpPL', 'Anti-corruption reporting', 'The organization monitors relevant KPIS regarding corruption and bribery matters - Training coverage - Violations, fines, incidents');
INSERT INTO "_DocumentToRequirement" ("B", "A") VALUES ('FKW3sGjpPL', 'anti-corruption-report');

INSERT INTO "Requirement" ("id", "name", "description") VALUES ('6Aq0vikHfv', 'Anti-corruption certification', 'The organization undergoes third-party verification of its anti-corruption management system, demonstrating compliance with international anti-corruption standards and a commitment to ethical business practices.');
INSERT INTO "_DocumentToRequirement" ("B", "A") VALUES ('6Aq0vikHfv', 'iso-37001-certificate');

INSERT INTO "Requirement" ("id", "name", "description") VALUES ('7ZsS3XAqyJ', 'Disciplinary system and sanctions in the event of misconduct', 'The organization has implemented a disciplinary system and sanctions in the event of misconduct or breach against the code of conduct');
INSERT INTO "_DocumentToRequirement" ("B", "A") VALUES ('7ZsS3XAqyJ', 'ethics-charter');
