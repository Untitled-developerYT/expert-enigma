function TestChain() {
  var bodyDef = new b2BodyDef();
  var ground = world.CreateBody(bodyDef);

  var edge = new b2EdgeShape();
  edge.Set(new b2Vec2(-40, 0), new b2Vec2(40, 0));
  ground.CreateFixtureFromShape(edge, 0);

  var y = 25;
  var prevBody = ground;
  for (var i = 0; i < 30; i++) {
    var jd = new b2RevoluteJointDef();
    jd.collideConnected = false;
    var box = new b2PolygonShape();
    box.SetAsBoxXY(0.6, 0.125);
    var fixtureDef = new b2FixtureDef();
    fixtureDef.shape = box;
    fixtureDef.density = 20;
    fixtureDef.friction = 0.2;
    bodyDef.type = b2_dynamicBody;
    bodyDef.position.Set(0.5 + i, y);
    var body = world.CreateBody(bodyDef);
    body.CreateFixtureFromDef(fixtureDef);

    var anchor = new b2Vec2(i, y);
    jd.InitializeAndCreate(prevBody, body, anchor);
    prevBody = body;
  }
  var N = 200;
  var M = 10;
  var position = new b2Vec2;
  position.y = 0.0;
  for (var j = 0; j < M; ++j) {
    position.x = -N * a;
    for (var i = 0; i < N; ++i) {
      var shape = new b2PolygonShape;
      shape.SetAsBoxXYCenterAngle(a, a, position, 0.0);
      ground.CreateFixtureFromShape(shape, 0.0);
      ++this.fixtureCount;
      position.x += 2.0 * a;
    }
    position.y -= 2.0 * a;
  }

  var a = 0.5;
  var shape = new b2PolygonShape;
  shape.SetAsBoxXY(a, a);

  var x = new b2Vec2(-7.0, 0.75);
  var y = new b2Vec2;
  var deltaX = new b2Vec2(0.5625, 1.25);
  var deltaY = new b2Vec2(1.125, 0.0);

  for (var i = 0; i < count; ++i) {
    y = x.Clone();

    for (j = i; j < count; ++j) {
      bd = new b2BodyDef;
      bd.type = b2_dynamicBody;
      bd.position = y;

      var body = world.CreateBody(bd);
      body.CreateFixtureFromShape(shape, 5.0);
      ++this.fixtureCount;
      b2Vec2.Add(y, y, deltaY);
    }
    b2Vec2.Add(x, x, deltaX);
  }
}