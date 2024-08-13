const { semver } = require("../../../utils");

const leadRE = /^(~|\^|>=?)/;
const rangeToVersion = (r) => r.replace(leadRE, "").replace(/x/g, "0");

// 获取更新的版本
module.exports = function tryGetNewerRange(r1, r2) {
  const v1 = rangeToVersion(r1);
  const v2 = rangeToVersion(r2);
  if (semver.valid(v1) && semver.valid(v2)) {
    // gt 大于
    return semver.gt(v1, v2) ? r1 : r2;
  }
};
