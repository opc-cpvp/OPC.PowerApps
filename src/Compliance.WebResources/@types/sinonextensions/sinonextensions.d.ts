import "sinon";
declare module "sinon" {
    interface SinonSpyStatic {
        <T>(obj: T): SinonSpy;
    }
}
