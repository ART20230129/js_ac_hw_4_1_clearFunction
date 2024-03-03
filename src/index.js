export function heroHealth(obj) {
  if (obj.health > 50) {
        return 'healthy';
  };
  if (obj.health >= 15 && obj.health <= 50){
        return 'wounded';
  };
  return 'critical';
}

