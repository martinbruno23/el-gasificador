---
name: systematic-debugging
description: Use when encountering any bug, test failure, or unexpected behavior, before proposing fixes
---

# Systematic Debugging

## Overview

Random fixes waste time and create new bugs. Quick patches mask underlying issues.

**Core principle:** ALWAYS find root cause before attempting fixes. Symptom fixes are failure.

## The Iron Law

```
NO FIXES WITHOUT ROOT CAUSE INVESTIGATION FIRST
```

## When to Use

Use for ANY technical issue: test failures, bugs, unexpected behavior, performance problems, build failures.

## The Four Phases

### Phase 1: Root Cause Investigation

**BEFORE attempting ANY fix:**

1. **Read Error Messages Carefully** - Don't skip past errors or warnings
2. **Reproduce Consistently** - Can you trigger it reliably?
3. **Check Recent Changes** - What changed that could cause this?
4. **Trace Data Flow** - Where does bad value originate? Keep tracing up until you find the source.

### Phase 2: Pattern Analysis

1. Find working examples in the same codebase
2. Compare against references - read completely
3. Identify differences between working and broken

### Phase 3: Hypothesis and Testing

1. State clearly: "I think X is the root cause because Y"
2. Make the SMALLEST possible change to test hypothesis
3. One variable at a time

### Phase 4: Implementation

1. Create failing test case first
2. Implement single fix addressing root cause
3. Verify fix works
4. If 3+ fixes failed: question the architecture

## Red Flags - STOP

- "Quick fix for now, investigate later"
- "Just try changing X and see if it works"
- Proposing solutions before tracing data flow
- "One more fix attempt" (when already tried 2+)

**ALL of these mean: STOP. Return to Phase 1.**

## Remember

Systematic debugging is FASTER than guess-and-check thrashing. Always find root cause first.
