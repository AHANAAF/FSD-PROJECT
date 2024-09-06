const unlockBadge = async (userId, points) => {
  let badge = null;

  if (points >= 50) {
    badge = "Bronze Badge";
  } else if (points >= 100) {
    badge = "Silver Badge";
  } else if (points >= 200) {
    badge = "Gold Badge";
  }

  if (badge) {
    await User.findByIdAndUpdate(userId, { $addToSet: { achievements: badge } });
  }
};
