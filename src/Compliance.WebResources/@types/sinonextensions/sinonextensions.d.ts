import "sinon";

// This was put in place to minimize the changes to unit tests when introducing eslint.
declare module "sinon" {
    // TODO: These definitions should be removed in favor of proper definitions for spies
    interface SinonSpyStatic {
        <T>(obj: T): T;
        <T>(obj: T, method: string): SinonSpy;
    }

    // TODO: This definition should be removed in favor of proper definitions for stubs.
    interface SinonStubStatic {
        <T>(obj: T, method: string): SinonStub;
    }
}
