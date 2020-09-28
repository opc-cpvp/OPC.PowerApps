import "sinon";

declare module "sinon" {
    interface SinonSpyStatic {
        <T>(obj: T): T;
        <T>(obj: T, method: string): SinonSpy;
    }

    interface SinonStubStatic {
        <T>(obj: T, method: string): SinonStub;
    }
}
