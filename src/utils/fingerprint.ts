import FingerprintJS, { Agent } from "@fingerprintjs/fingerprintjs";

let fpInstance: Promise<Agent> | null = null;

export const getFingerprint = async () => {
  if (!fpInstance) {
    fpInstance = FingerprintJS.load();
  }
  const fp = await fpInstance;
  const result = await fp.get();
  return result.visitorId;
};
