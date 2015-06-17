var methods = require("../../modules/moduleA/controllers/job.client.controller");
var methdo = new methods();


function aa(aaa) {
    if (aaa == 1) {
        return 1;
    }

    return 2;
}

describe("methods tests", function ()
{
    it("should return 112", function ()
    {
        expect(methdo.getJobs(112)).toBe(112);
    });

    it("should return 112", function ()
    {
        expect(methdo.getJobs("Mumbo-Jumbo")).toBe("Mumbo-Jumbo");
    });

    it("should return 112", function ()
    {
        expect(methdo.getWeJob(123)).toBe("哈哈");
    });

    it("新的测试", function ()
    {
        expect(methods.getJobs(123)).toBe("哈哈");
    });
    //
    //
    //it("should throw an error",function()
    //{
    //    expect(function()
    //    {
    //        methods.getJobs("Mumbo-Jumbo")
    //    }).toThrow(new Error("Only works with numbers"));
    //});
});