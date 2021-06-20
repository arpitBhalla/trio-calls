import { CommunicationIdentityClient } from "@azure/communication-identity";

const main = async () => {
  console.log("Azure Communication Services - Access Tokens Quickstart");

  // Quickstart code goes here
  const connectionString =
    process.env["COMMUNICATION_SERVICES_CONNECTION_STRING"] || "";

  // Instantiate the identity client
  const identityClient = new CommunicationIdentityClient(connectionString);
  let identityResponse = await identityClient.createUser();
  console.log(
    `\nCreated an identity with ID: ${identityResponse.communicationUserId}`
  );

  // Issue an access token with the "voip" scope for an identity
  let tokenResponse = await identityClient.getToken(identityResponse, [
    "voip",
    "chat",
  ]);
  const { token, expiresOn } = tokenResponse;
  console.log(
    `\nIssued an access token with 'voip' scope that expires at ${expiresOn}:`
  );
  console.log(token);
};

main().catch((error) => {
  console.log("Encountered an error");
  console.log(error);
});
